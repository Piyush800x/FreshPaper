// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env;
use wallpaper_app_latest::{get_from_search, download_image, get_display_infos, download_set_wallpaper};
use tokio;
use tauri::{command, generate_handler};

#[tokio::main]
async fn main() {

    // WORKING with FRONTEND
    tauri::Builder::default()
        .invoke_handler(generate_handler![searching, save_image, get_display_info, set_wallpaper])
        // .invoke_handler(generate_handler![get_display_info])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}

#[command]
async fn searching(name: String, page: i32) -> Vec<String> {
    let list = get_from_search(name, page).await;
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

#[command]
async fn get_display_info() -> Vec<String> {
    let displays = get_display_infos();
    return displays;
}

#[command]
async fn set_wallpaper(url: String) -> bool   {
    let res = download_set_wallpaper(url).await.unwrap();
    return res;
}



// // TEST ONLY
// #[tokio::main]
// async fn main() {
//     set_wallpaper("https://images.unsplash.com/photo-1708748053605-31f7161a09a5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDQwMjE3NA&ixlib=rb-4.0.3&q=80&w=1920".to_string()).await;
// }
