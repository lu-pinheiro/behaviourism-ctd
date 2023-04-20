export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const json = await import(`./question-${params.id}.json`);
  return new Response(JSON.stringify(json));
}
