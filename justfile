set dotenv-load

export EDITOR := 'nvim'

alias f := fmt
alias r := run

default:
  just --list

dev:
  open -a 'Google Chrome' ./docs/index.html

fmt:
	cargo fmt
	prettier --write .

forbid:
  ./bin/forbid

run *args:
	cargo run {{args}}
