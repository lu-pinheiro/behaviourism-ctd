export async function GET(request: Request) {
  const json = await import(`./intro.json`);
  return new Response(JSON.stringify(json));
}
