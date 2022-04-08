use crate::common::*;

mod arguments;
mod common;
mod generator;
mod loader;
mod parser;
mod post;
mod system_time_ext;

fn main() {
  if let Err(error) = Arguments::parse().run() {
    println!("error: {error}");
    process::exit(1);
  }
}
