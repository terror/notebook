use crate::common::*;

pub(crate) trait SystemTimeExt {
  fn into_datetime(&self) -> DateTime<Utc>;
}

impl SystemTimeExt for SystemTime {
  fn into_datetime(&self) -> DateTime<Utc> {
    self.clone().into()
  }
}
