// mod gui;

use dotenv;
use rand::prelude::*;
use reqwest;
use serde::{Deserialize, Serialize, Serializer};
use std;
use std::fs::File;
use std::io::{copy, Read};
use std::string::String;
use tokio;
use rand::Rng;
use std::path::{Display, PathBuf};
use std::env;
use serde::ser::SerializeStruct;
use tauri::{command, State, Manager};
use winit::window::Window;
use winit::event_loop::EventLoop;
use display_info::DisplayInfo;
use std::time::Instant;
use serde_json::json;

#[derive(Debug, Deserialize)]
pub struct UnsplashPhoto {
    pub urls: UnsplashUrls,
}

#[derive(Debug, Deserialize)]
pub struct UnsplashUrls {
    pub full: String,
}

#[derive(Debug, Deserialize)]
pub struct UnsplashSearchResult {
    pub results: Vec<UnsplashPhoto>,
}


pub async fn search(access_key: String, query: String, page: i32) -> UnsplashSearchResult {
    let query = query;

    // Make a request to Unsplash API to search for photos
    let response = reqwest::get(&format!(
        "https://api.unsplash.com/search/photos?page={}&per_page=12&query={}&client_id={}",
        page, query, access_key
    ))
    .await
    .unwrap();

    // Deserialize JSON response
    let search_result: UnsplashSearchResult = response.json().await.unwrap();

    // Iterate over the search results and print image URLs
    // for photo in search_result.results {
    //     println!("Image URL: {}", photo.urls.full);
    //     // println!("{}", photo.urls.full[])
    // }
    return search_result;
}

pub async fn get_from_search(name: String, page: i32) -> Vec<String>  {    // call this func in main and add it to invoke_handler
    // dotenv::dotenv().ok();
    // let access_key = env::var("UNSPLASH_ACCESS_KEY").expect("Error");
    let access_key: String = "CtY3hbATQPqbDFhjW2r_EX20Mp_7djghn25tqea0Qag".to_string();
    let search_query = search(access_key, name, page).await;
    let mut urls: Vec<String> = vec![];

    for url in search_query.results {
        urls.push(url.urls.full);
    }
    println!("{:?}", urls);
    return urls;
}
// #[tauri::command]
// pub fn print_username(name: &str) {
//     println!("Username: {}", name);
// }
pub async fn download_image(url: String) -> bool   {
    // Send a GET request to the URL
    let response = reqwest::get(url.to_string()).await.unwrap();
    print!("Response -> {:?}", response);

    // Check if the request was successful
    return if response.status().is_success() {
        // Extract the image data
        let image_data = response.bytes().await.unwrap();

        // Determine the downloads folder based on the operating system
        let mut downloads_folder = match env::var_os("HOME") {
            Some(home_dir) => {
                let mut path = PathBuf::from(home_dir);
                path.push("Downloads");
                path
            }
            None => {
                // Default to the current directory if HOME environment variable is not set
                PathBuf::from(".")
            }
        };
        println!("{:?}", downloads_folder);

        // Create a new file to save the image
        let random_number = rand::thread_rng().gen_range(1000..999999);
        let file_name = format!("{}.jpg", random_number);

        // Append the filename to the downloads folder path
        downloads_folder.push(&file_name);

        let mut file = File::create(downloads_folder).unwrap();

        // Write the image data to the file
        copy(&mut image_data.as_ref(), &mut file).unwrap();

        println!("Image downloaded successfully!");
        true
    } else {
        println!("Failed to download image: {}", response.status());
        false
    }
}

pub fn get_display_infos() -> Vec<String> {
    let mut display_info: Vec<String> = vec![];
    let display_infos = DisplayInfo::all().unwrap();

    for (i, &ref display) in display_infos.iter().enumerate()    {

        let json_data = json!({
            "index": i,
            "name": String::from(format!("Display {}", i)),
            "res": (display.width, display.height),
            "primary": display.is_primary
        });

        display_info.insert(i, json_data.to_string());

    }

    return display_info;
}