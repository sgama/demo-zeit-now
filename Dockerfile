ARG NODEJS_VERSION="13.13.0"
ARG NOW_VERSION="18.0.0"

FROM node:slim

ENV ZEIT_TOKEN="null"
ENV NOW_ORG_ID='null'
ENV NOW_PROJECT_ID="null"

RUN npm install && npm install -g now mocha

WORKDIR "/root/project"
ENTRYPOINT ["sh"]
CMD ["run.sh"]