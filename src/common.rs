pub(crate) use std::{
  fs,
  path::PathBuf,
  process::{self, Command},
  str,
  time::SystemTime,
};

pub(crate) use {
  chrono::prelude::{DateTime, Utc},
  clap::Parser as StructOpt,
  minijinja::{context, Environment},
  serde::Serialize,
};

pub(crate) use crate::{
  arguments::Arguments, generator::Generator, loader::Loader, parser::Parser,
  post::Post,
};

pub(crate) use crate::system_time_ext::SystemTimeExt;

pub(crate) type Error = Box<dyn std::error::Error>;
pub(crate) type Result<T = (), E = Error> = std::result::Result<T, E>;

pub(crate) const CONTENT_PATH: &str = "content";
pub(crate) const DOCS_PATH: &str = "docs";
pub(crate) const TEMPLATES_PATH: &str = "templates";
