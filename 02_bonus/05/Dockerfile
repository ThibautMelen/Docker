FROM debian

RUN apt-get update && \
apt-get upgrade

ADD https://github.com/browsh-org/browsh/releases/download/v1.5.0/browsh_1.5.0_linux_amd64.deb mario_browsh.deb

RUN apt-get install -y ./mario_browsh.deb

ENTRYPOINT browsh https://pikomit.com
