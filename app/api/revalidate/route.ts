import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const type = body?._type;

  // Revalide les pages selon le type de document modifié
  if (type === "actualite") {
    revalidatePath("/");
    revalidatePath("/actualites");
    revalidatePath("/actualites/[slug]", "page");
  } else if (type === "match") {
    revalidatePath("/");
  } else {
    // Revalide tout par sécurité
    revalidatePath("/", "layout");
  }

  return NextResponse.json({ revalidated: true, type });
}
