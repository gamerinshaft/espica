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

$inputfile="index-content.html";

print <html>;


open (FILE, $inputfile) or die "$!";
while (<FILE>) {
    print $_;
}
close (FILE);
print <<EOL;
<script>
\$(function(){
  \$('#counter').text($count + "人目");
});
</script>
</body>
</html>
EOL

exit;