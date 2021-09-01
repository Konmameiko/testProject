FROM nginx:1.18.0-alpine
#FROM nginx:latest
# RUN mkdir /testProject;\
# cd /testProject;\
# mkdir app

# 全局准备
#RUN yum install vim make -y

#WORKDIR /portal/app
#USER root

#RUN yarn

RUN mkdir /testProject
COPY ./dist /testProject/dist
# COPY ./distC ./portal/app/egPortal/distC

COPY ./nginx/nginx.conf  /etc/nginx
COPY ./nginx/proxy.conf  /etc/nginx
RUN mkdir /etc/nginx/vhost;\
mkdir /etc/nginx/logs;\
chmod 775 -R /etc/nginx
COPY ./nginx/proxy.conf  /etc/nginx
COPY ./nginx/testProject.conf  /etc/nginx/vhost
#CMD ["npm", "run", "build"]
#RUN echo "daemon off;" >> /etc/nginx/nginx.conf
ENTRYPOINT ["/usr/sbin/nginx","-g","daemon off;"]
# CMD ["-g","daemon off;"]