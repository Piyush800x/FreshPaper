// mod gui;

use dotenv;
use rand::prelude::*;
use reqwest;
use serde::{Deserialize, Serialize};
use std;
use std::env;
use std::string::String;
use tokio;
use tauri::command;


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

pub async fn download(img_url: String) {
    let mut rng = rand::thread_rng();
    let img_response = reqwest::get(&img_url).await.unwrap();
    let img_bytes = img_response.bytes().await.unwrap();

    // Write image
    std::fs::write(format!("{}.jpg", rng.gen_range(0..=9999)), img_bytes).unwrap();
    print!("Download success!");
}

pub async fn search(access_key: String, query: String) -> UnsplashSearchResult {
    let query = query;

    // Make a request to Unsplash API to search for photos
    let response = reqwest::get(&format!(
        "https://api.unsplash.com/search/photos?query={}&client_id={}",
        query, access_key
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

pub async fn get_from_search(name: String) -> Vec<String>  {    // call this func in main and add it to invoke_handler
    // dotenv::dotenv().ok();
    // let access_key = env::var("UNSPLASH_ACCESS_KEY").expect("Error");
    let access_key: String = "CtY3hbATQPqbDFhjW2r_EX20Mp_7djghn25tqea0Qag".to_string();
    let search_query = search(access_key, name).await;
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