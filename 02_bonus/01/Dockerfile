#ENV C

FROM debian

MAINTAINER thmelen <thmelen@student.42.fr>

RUN apt-get update && apt-get upgrade
RUN apt-get install -y gcc git vim make binutils clang

ENTRYPOINT /bin/bash
