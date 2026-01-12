export async function loadHeader(target: HTMLElement): Promise<void> {
    const res = await fetch('./header.html');
    if (!res.ok) throw new Error(`Header fetch failed: ${res.status} ${res.statusText}`);
    target.innerHTML = await res.text();
}
