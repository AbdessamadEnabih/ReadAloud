import string
from newspaper import Article
from pydantic import BaseModel


class ArticleResponse(BaseModel):
    url: str
    title: str
    text: str
    audio: str


async def generate_audio_from_article(article):
    return True


async def get_article_from_url(url: string):
    try:
        article = Article(url)
        article.download()
        article.parse()

        return
    except Exception as e:
        raise Exception(e)
