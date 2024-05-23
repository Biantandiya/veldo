function createObject(title: string, points: number): { title: string; points: number } {
  // Ensure title is a non-empty string and points is a non-negative number
  if (title && points >= 0) {
    return { title, points };
  } else {
    throw new Error('Invalid arguments');
  }
}
