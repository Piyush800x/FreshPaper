// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env;
use wallpaper_app_latest::{search, get_from_search, download_image};
use tokio;
use tauri::{Manager, RunEvent, command, generate_handler};
use dotenv;

#[tokio::main]
async fn main() {

    // WORKING with FRONTEND
    tauri::Builder::default()
        .invoke_handler(generate_handler![searching, save_image])
        // .invoke_handler(generate_handler![])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}

#[command]
async fn searching(name: String, page: i32) -> Vec<String> {
    let mut list = get_from_search(name, page).await;
    return list;
}
// Result<Ok(bool), Err()>
#[command]
async fn save_image(url: String) -> Result<bool, bool> {
    let res: bool = download_image(url).await;
    if res {
        Ok(true)
    }
    else { Err(false) }
}