#TETRIS

FROM debian

MAINTAINER thmelen <thmelen@student.42.fr>

RUN apt-get update && apt-get upgrade
RUN apt-get install -y gcc git make binutils clang libncurses5-dev g++

RUN git clone https://github.com/alexdantas/yetris.git

WORKDIR yetris

RUN make

ENTRYPOINT make run
