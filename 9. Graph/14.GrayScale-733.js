
/**
 * @param {int32} pixel_row
 * @param {int32} pixel_column
 * @param {int32} new_color
 * @param {list_list_int32} image
 * @return {list_list_int32}
 */
function flood_fill(pixel_row, pixel_column, new_color, image) {
  if (!image || image.length === 0) {
    return []
  }
  const cell_color_org = image[pixel_row][pixel_column]; // color=1

  const rows = image.length;
  const columns = image[0].length;

  // if (cell_color_org === new_color) return image;  // optional

  const visited = Array.from({ length: rows }, () => new Array(columns).fill(false));

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= columns || visited[r][c] || image[r][c] !== cell_color_org) {
      return;
    }
    visited[r][c] = true;
    image[r][c] = new_color;
    dfs(r + 1, c)
    dfs(r - 1, c)
    dfs(r, c + 1)
    dfs(r, c - 1)

  }

  dfs(pixel_row, pixel_column)

  return image;
}

// Time: O(m × n) in the worst case (every cell is visited once).
// Space: O(m × n)
// visited array: O(m × n)
// recursion stack: up to O(m × n) in the worst case.