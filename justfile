set dotenv-load

export EDITOR := 'nvim'

alias f := fmt
alias r := run

default:
  just --list

fmt:
	cargo fmt
	prettier --write .

forbid:
  ./bin/forbid

run *args:
	cargo run {{args}}

serve:
  just run generate
  just fmt
  just run serve
