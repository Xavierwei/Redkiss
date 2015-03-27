I=830
for F in *.jpg; do
  echo "$F" `printf FULL_DROP_%05d.jpg $I`
  mv "$F" `printf 1/FULL_DROP_%05d.jpg $I` 2>/dev/null || true
  I=$((I + 1))
done
