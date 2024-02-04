from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from utils.helpers import generate_audio_from_article, get_article_from_url
app = FastAPI()


class ArticleRequest(BaseModel):
    url: str


@app.post('/generate_audio')
async def generate_audio(article_request: ArticleRequest):
    try:
        result = await generate_audio_from_article(article_request.url)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error:  {str(e)}")
