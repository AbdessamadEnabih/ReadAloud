import base64
from newspaper import Article as scrapArticle
from pydantic import BaseModel
from io import BytesIO
from gtts import gTTS


class ArticleResponse(BaseModel):
    url: str = ""
    title: str = ""
    # summary: str = ""
    audio: bytes = b""


Article = ArticleResponse()


async def generate_audio_from_article(article_url):
    try:
        await get_article_from_url(article_url)
        await get_audio_from_text(Article.text)

        serialized_article = Article.model_dump()
        serialized_article["audio"] = base64.b64encode(serialized_article["audio"])

        return serialized_article
    except Exception as e:
        raise Exception(f"Error generate audio from article: {e}")


async def get_article_from_url(url):
    """

    :param url:
    """
    try:
        scrapped_article = scrapArticle(url)
        scrapped_article.download()
        scrapped_article.parse()

        Article.title = scrapped_article.title
        Article.url = scrapped_article.url

    except Exception as e:
        raise Exception(f"Error scrapping the article : {e}")


async def get_audio_from_text(article_text):
    """

    :param article_text:
    """
    try:
        tts = gTTS(article_text)
        audio_stream = BytesIO()
        tts.write_to_fp(audio_stream)
        audio_stream.seek(0)

        Article.audio = audio_stream.read()
    except Exception as e:
        raise Exception(f"Error generating audio: {e}")
