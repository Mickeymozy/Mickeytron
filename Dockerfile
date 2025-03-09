FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/Mickeymozy/Mickeytron /root/Mickeymozy

WORKDIR /root/Mickeymozy/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
