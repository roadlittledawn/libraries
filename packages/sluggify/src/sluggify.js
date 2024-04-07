import slug from 'slug';

slug.extend({
  '/': '-',
  '\\': '-',
  _: '-',
  '-': '-',
  '&': 'and',
});

export default function sluggify(value, options) {
  if (Number.isNaN(value)) return null;
  if (value === null || value === undefined) return null;
  if (typeof value === 'string' && value.match(/^\s+$/)) return null;

  let v = value;
  if (typeof v === 'number') v = `${v}`;

  const sluggified = slug(v, options);

  // remove repetitive dashes
  const repetitiveRemoved = sluggified.replace(/-{2,}/g, '-');
  // strip leading and trailing dashes
  const dashesTrimmed = repetitiveRemoved.replace(/^-+/, '').replace(/-+$/, '');
  // return null when empty
  return dashesTrimmed || null;
}
