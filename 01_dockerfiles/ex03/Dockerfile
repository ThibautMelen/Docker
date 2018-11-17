FROM ubuntu

MAINTAINER thmelen <thmelen@student.42.fr>

EXPOSE 443 80 22

RUN apt-get update && \
apt-get upgrade -y && \
apt-get install -y ca-certificates openssh-server wget postfix

RUN wget https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh && chmod 777 script.deb.sh && ./script.deb.sh && apt-get install -y gitlab-ce

RUN apt update && apt install -y tzdata && \
apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENTRYPOINT (/opt/gitlab/embedded/bin/runsvdir-start &) && gitlab-ctl reconfigure && tail -f /dev/null

# docker build -t wdtfs .
# docker run -it --rm -p 8080:80 -p 8022:22 -p 8443:443 --privileged wdtfs
