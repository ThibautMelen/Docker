docker build -t teamspeak .
docker run -ti --rm -p 9987:9987/udp -p 30033:30033 -p 10011:10011 teamspeak
