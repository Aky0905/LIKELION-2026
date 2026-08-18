import json
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="ORBIT API", version="1.0.0")

# CORS 설정 (프론트엔드 연동용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_DIR = Path(__file__).parent / "data"


def load_json(filename: str):
    filepath = DATA_DIR / filename
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)


@app.get("/api/home")
def get_home():
    return load_json("home.json")


@app.get("/api/skin")
def get_skin():
    return load_json("skin.json")


@app.get("/api/user")
def get_user():
    return load_json("user.json")
