use crate::common::*;

#[derive(Debug, StructOpt)]
pub(crate) struct Generator;

impl Generator {
  pub(crate) fn run(&self, posts: Vec<Post>) -> Result {
    let mut posts = posts;

    posts.sort_by(|a, b| b.cmp(a));

    let mut env = Environment::new();

    let index_template_content =
      fs::read_to_string(format!("{}/index.html", TEMPLATES_PATH))?;
    env.add_template("index", &index_template_content)?;

    let post_template_content =
      fs::read_to_string(format!("{}/post.html", TEMPLATES_PATH))?;
    env.add_template("post", &post_template_content)?;

    fs::write(
      format!("{}/index.html", DOCS_PATH),
      env
        .get_template("index")?
        .render(context! { posts => posts })?,
    )?;

    let post_template = env.get_template("post")?;

    posts.iter().try_for_each(|post| -> Result {
      let directory_path =
        PathBuf::from(DOCS_PATH).join(post.file_stem.clone());

      if !directory_path.exists() {
        fs::create_dir(&directory_path)?;
      }

      Ok(fs::write(
        format!("{}/index.html", directory_path.display()),
        post_template.render(context! { post => post })?,
      )?)
    })
  }
}
