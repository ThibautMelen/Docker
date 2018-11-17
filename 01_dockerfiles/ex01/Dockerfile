FROM debian

MAINTAINER thmelen <thmelen@student.42.fr>

EXPOSE 9987/udp 10011 30033 

RUN apt-get update && \
apt-get install bzip2 ca-certificates apt-utils -y

WORKDIR /teamspeakserver

ADD http://dl.4players.de/ts/releases/3.5.0/teamspeak3-server_linux_amd64-3.5.0.tar.bz2 teamspeak.tar.bz2

RUN chmod 777 teamspeak.tar.bz2 && \
	tar -xvf teamspeak.tar.bz2 && \
	rm teamspeak.tar.bz2

WORKDIR /teamspeakserver/teamspeak3-server_linux_amd64
RUN touch .ts3server_license_accepted

ENTRYPOINT sh ts3server_minimal_runscript.sh
