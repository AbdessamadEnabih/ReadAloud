from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from utils.helpers import generate_audio_from_article
app = FastAPI()


class ArticleRequest(BaseModel):
    url: str


@app.post('/generate_audio')
async def generate_audio(article_request: ArticleRequest) -> JSONResponse:
    try:
        result = await generate_audio_from_article(article_request)
        data = {"message": "Hello, FastAPI!"}
        return JSONResponse(content=data, status_code=200)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error:  {str(e)}")
