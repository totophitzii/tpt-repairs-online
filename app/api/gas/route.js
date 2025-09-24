export async function GET() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_GAS_API);
    if (!res.ok) {
      throw new Error(`GAS API error: ${res.status}`);
    }
    const data = await res.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
