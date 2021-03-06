pub(crate) use std::{
  cmp::Ordering,
  fs,
  path::{Path, PathBuf},
  process::{self, Command},
  str,
  time::SystemTime,
};

pub(crate) use {
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
  std::net::SocketAddr,
  tower_http::{
    services::ServeDir, set_header::SetResponseHeaderLayer, trace::TraceLayer,
  },
  yaml_front_matter::YamlFrontMatter,
};

pub(crate) use crate::{
  arguments::Arguments, frontmatter::Frontmatter, generator::Generator,
  loader::Loader, parser::Parser, post::Post, server::Server,
};

pub(crate) use crate::system_time_ext::SystemTimeExt;

pub(crate) type Error = Box<dyn std::error::Error>;
pub(crate) type Result<T = (), E = Error> = std::result::Result<T, E>;

pub(crate) const CONTENT_PATH: &str = "content";
pub(crate) const DOCS_PATH: &str = "docs";
pub(crate) const TEMPLATES_PATH: &str = "templates";
