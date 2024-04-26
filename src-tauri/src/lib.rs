// mod gui;

use dotenv;
use rand::prelude::*;
use reqwest;
use serde::{Deserialize, Serialize};
use std;
use std::fs::File;
use std::io::{copy, Read};
use std::string::String;
use tokio;
use rand::Rng;
use std::path::PathBuf;
use std::env;


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

// pub async fn download(img_url: String) {
//     let mut rng = rand::thread_rng();
//     let img_response = reqwest::get(&img_url).await.unwrap();
//     let img_bytes = img_response.bytes().await.unwrap();
//
//     // Write image
//     std::fs::write(format!("{}.jpg", rng.gen_range(0..=9999)), img_bytes).unwrap();
//     print!("Download success!");
// }

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