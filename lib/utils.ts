import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DUMMY_MD = `# 1. 常用Markdownサンプルの見出し

これは通常の段落です。テキストを**太字**にしたり、*斜体*にしたり、~~打ち消し線~~を入れることができます。

## リストのサンプル
* 箇条書きアイテム1
* 箇条書きアイテム2
    * ネストされたアイテム

1. 番号付きアイテム1
2. 番号付きアイテム2

## 引用とリンク・画像
> これは引用文です。
> 複数行にまたがる引用も可能です。

[Googleへのリンク](https://google.com)

サンプル画像：
![サンプル画像](/favicon.ico)

---

# 2. GFM (GitHub Flavored Markdown) 特有の機能

## タスクリスト
- [x] 今日のタスクを完了する
- [ ] 明日の準備をする

## テーブル（表）

| ツール名 | 用途 | 難易度 |
| :--- | :---: | ---: |
| Markdown | ドキュメント作成 | 簡単 |
| Git | バージョン管理 | 普通 |

## 自動リンク & ユーザー言及
自動リンク: https://github.com
ユーザー言及: @github_user

---

# 3. コードブロック（3言語のサンプル）

## Rust (rs)
\`\`\`rust
fn main() {
    let name = "Rust";
    println!("Hello, {}!", name);
    
    // ベクトルの基本操作
    let mut numbers = vec![1, 2, 3];
    numbers.push(4);
    println!("Numbers: {:?}", numbers);
}
\`\`\`

## TypeScript (ts)
\`\`\`typescript
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const greeting = (user: User): string => {
  return \`Hello, \${user.name}! Your ID is \${user.id}.\`;
};

const adminUser: User = { id: 1, name: "Alice", isAdmin: true };
console.log(greeting(adminUser));
\`\`\`

## Python (py)
\`\`\`python
def greet(name: str) -> str:
    """ユーザーに挨拶を返す関数"""
    return f"Hello, {name}!"


if __name__ == "__main__":
    # リスト内包表記のサンプル
    squares = [x**2 for x in range(5)]
    print(greet("Python"))
    print(f"Squares: {squares}")
\`\`\``;

export const dummyData = async (post_id: string) => {
  const duration = Math.random() * 100 + 200;
  const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      if (post_id === "markdown") {
        resolve(DUMMY_MD);
      } else {
        resolve(`This is a post with id: ${post_id}`);
      }
    }, duration);
  });

  return await promise;
};
