use {
  crate::{
    arguments::Arguments, frontmatter::Frontmatter, generator::Generator,
    loader::Loader, post::Post, server::Server,
  },
  axum::{
    http::{
      header::{self, HeaderValue},
      StatusCode,
    },
    routing::get_service,
    Router,
  },
  chrono::prelude::{DateTime, Utc},
  clap::Parser as StructOpt,
  minijinja::{context, Environment},
  serde::{Deserialize, Serialize},
  std::{
    cmp::Ordering,
    fs,
    net::SocketAddr,
    path::{Path, PathBuf},
    process::{self, Command},
    str,
  },
  tower_http::{
    services::ServeDir, set_header::SetResponseHeaderLayer, trace::TraceLayer,
  },
  yaml_front_matter::YamlFrontMatter,
};

const CONTENT_PATH: &str = "content";
const DOCS_PATH: &str = "docs";
const TEMPLATES_PATH: &str = "templates";

mod arguments;
mod frontmatter;
mod generator;
mod loader;
mod parser;
mod post;
mod server;

type Result<T = (), E = Box<dyn std::error::Error>> = std::result::Result<T, E>;

#[tokio::main]
async fn main() {
  if let Err(error) = Arguments::parse().run().await {
    println!("error: {error}");
    process::exit(1);
  }
}
