use std::fs::File;
use std::io::copy;

// Import reqwest crate
use reqwest;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // URL of the image you want to download
    let url = "https://example.com/image.jpg";

    // Send a GET request to the URL
    let response = reqwest::blocking::get(url)?;

    // Check if the request was successful
    if response.status().is_success() {
        // Extract the image data
        let image_data = response.bytes()?;

        // Create a new file to save the image
        let mut file = File::create("image.jpg")?;

        // Write the image data to the file
        copy(&mut image_data.as_ref(), &mut file)?;

        println!("Image downloaded successfully!");
    } else {
        println!("Failed to download image: {}", response.status());
    }

    Ok(())
}

fn download_image(url: String)  {

}