use crate::common::*;

mod arguments;
mod common;
mod frontmatter;
mod generator;
mod loader;
mod parser;
mod post;
mod server;

#[tokio::main]
async fn main() {
  if let Err(error) = Arguments::parse().run().await {
    println!("error: {error}");
    process::exit(1);
  }
}
