import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://api.github.com/users/thigasfella/repos";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Erro ao solicitar informaçãos para API." },
        { status: 400 }
      );
    }

    const data = await response.json();

    return NextResponse.json({ content: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao solicitar informaçãos para API. " + error },
      { status: 401 }
    );
  }
}
