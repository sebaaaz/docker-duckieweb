FROM jekyll/jekyll:3.8

ADD duckieweb/ /srv/jekyll/

COPY entrypoint.sh /

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]