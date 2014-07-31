#!/usr/bin/perl
# アクセスカウンタ

print "Content-type: text/html; charset=utf-8\n\n";

# カウントファイルから読み込み
open(IN, "counter.txt");
$count = <IN>;
close(IN);

# カウント増加
$count++;

# カウントファイルに書き込み
open(OUT, "> counter.txt");
print OUT $count;
close(OUT);

print <<EOL;
<html>
<body>
<p>あなたは $count 人目のお客様です</p>
</body>
</html>
EOL

exit;