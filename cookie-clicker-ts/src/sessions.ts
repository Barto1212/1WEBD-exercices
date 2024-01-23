export function saveSession(cookieNum: number) {
  localStorage.setItem("cookieNum", String(cookieNum));
}

export function getSession(): number {
  const cookieNumLs = localStorage.getItem("cookieNum");
  if (isNaN(Number(cookieNumLs))) {
    return 0;
  }
  return Number(cookieNumLs);
}
