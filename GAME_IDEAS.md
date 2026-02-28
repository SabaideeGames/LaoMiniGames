# 🎮 20 Ý Tưởng Game Web Casual — Mobile-First, 100% Static

> Nghiên cứu & đề xuất 20 game mới, **không trùng** với 10 game hiện tại:
> ~~Stack Tower, Color Reflex, Rhythm Tap, Number Puzzle, Merge 2048, Block Puzzle, Memory Cards, Word Hunt, Snake, Cookie Clicker~~

---

## Mục lục

| #   | Game                                        | Thể loại              | Độ khó   |
| --- | ------------------------------------------- | --------------------- | -------- |
| 1   | [Bounce Ball](#1-bounce-ball)               | Hyper-casual / Arcade | ⭐⭐     |
| 2   | [Spin Wheel Fortune](#2-spin-wheel-fortune) | Idle / Luck           | ⭐⭐     |
| 3   | [Tap Dash Runner](#3-tap-dash-runner)       | Endless Runner        | ⭐⭐⭐   |
| 4   | [Bubble Pop](#4-bubble-pop)                 | Puzzle / Casual       | ⭐⭐⭐   |
| 5   | [Math Sprint](#5-math-sprint)               | Educational / Reflex  | ⭐⭐     |
| 6   | [Tile Match Triple](#6-tile-match-triple)   | Puzzle / Match        | ⭐⭐⭐   |
| 7   | [Knife Hit](#7-knife-hit)                   | Hyper-casual / Timing | ⭐⭐     |
| 8   | [Flappy Jump](#8-flappy-jump)               | Hyper-casual / Arcade | ⭐⭐     |
| 9   | [Hex Puzzle](#9-hex-puzzle)                 | Puzzle / Spatial      | ⭐⭐⭐   |
| 10  | [Swipe Solitaire](#10-swipe-solitaire)      | Card / Classic        | ⭐⭐⭐⭐ |
| 11  | [Planet Idle](#11-planet-idle)              | Idle / Incremental    | ⭐⭐⭐   |
| 12  | [Color Fill](#12-color-fill)                | Puzzle / Strategy     | ⭐⭐     |
| 13  | [Gravity Switch](#13-gravity-switch)        | Platformer / Reflex   | ⭐⭐⭐   |
| 14  | [Pattern Lock](#14-pattern-lock)            | Puzzle / Memory       | ⭐⭐     |
| 15  | [Emoji Match](#15-emoji-match)              | Reflex / Casual       | ⭐⭐     |
| 16  | [Dot Connect](#16-dot-connect)              | Puzzle / Relaxing     | ⭐⭐     |
| 17  | [Ice Slide Puzzle](#17-ice-slide-puzzle)    | Puzzle / Physics      | ⭐⭐⭐   |
| 18  | [Tap Color Switch](#18-tap-color-switch)    | Hyper-casual / Timing | ⭐⭐     |
| 19  | [Grow Garden](#19-grow-garden)              | Idle / Simulation     | ⭐⭐⭐   |
| 20  | [Reaction Time Lab](#20-reaction-time-lab)  | Reflex / Benchmark    | ⭐       |

---

## 1. Bounce Ball

**Thể loại:** Hyper-casual / Arcade

### Core Gameplay Loop

Điều khiển một quả bóng nảy qua các nền tảng (platforms) bằng cách nghiêng điện thoại hoặc chạm trái/phải. Bóng luôn nảy lên tự động. Người chơi phải hướng bóng rơi đúng nền tảng, tránh rơi khỏi màn hình. Mỗi platform cho điểm, một số platform đặc biệt (vàng = x2, đỏ = vỡ, xanh = spring).

### Cơ chế giữ chân

- **High score** lưu localStorage — luôn hiện "Best" trên đầu màn hình
- **Streak bonus** — càng nảy liên tiếp không miss, điểm nhân càng cao
- **Skin unlock** — mở khóa ball skins mới khi đạt mốc điểm (100, 500, 1000...)
- **Daily challenge** — seed random theo ngày, cùng 1 map cho tất cả player

### Vì sao phù hợp 100% Static + GitHub Pages

Toàn bộ logic game chạy trên Canvas 2D + JS thuần. Không cần physics engine nặng, chỉ dùng gravity giả lập đơn giản. Random seed theo `Date` cho daily challenge. Lưu score và unlocks trong localStorage.

### Tối ưu UX Mobile

- ✅ Chơi dọc (portrait) hoàn toàn
- ✅ Điều khiển bằng tilt (DeviceOrientation API) hoặc 2 nửa màn hình (tap trái/phải)
- ✅ Vibration API khi miss platform
- ✅ Không cần bàn phím, chỉ cần một ngón tay

### Độ khó triển khai: ⭐⭐ (2/5)

Canvas 2D cơ bản, vật lý đơn giản (gravity + bounce). 1 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> Canvas 2D đủ mạnh cho game này. Không cần framework vì chỉ có 1 màn hình game + 1 màn hình menu. Framework sẽ gây overhead không cần thiết.

### Mở rộng tương lai

- Thêm power-ups (shield, magnet, slow-motion)
- Thêm themes (space, ocean, forest)
- Leaderboard offline dạng bảng xếp hạng local
- Share score qua screenshot (html2canvas)

> **Game tương tự thành công:** _Helix Jump_ (500M+ downloads), _Bouncy Ball_ trên App Store

---

## 2. Spin Wheel Fortune

**Thể loại:** Idle / Luck / Casual

### Core Gameplay Loop

Quay vòng quay may mắn. Mỗi lần quay tốn 1 "spin token". Trúng thưởng: coins, gems, bonus spins, skins, power-ups. Dùng coins mua thêm segments tốt hơn cho wheel. Token hồi phục theo thời gian (1 token / 30 phút, tối đa 5).

### Cơ chế giữ chân

- **Token timer** — quay lại sau 30 phút để có token mới
- **Daily bonus wheel** — wheel đặc biệt mỗi ngày (dựa trên Date)
- **Collection system** — thu thập 50+ items (avatars, themes, badges)
- **Streak rewards** — chơi liên tiếp 7 ngày = Jackpot spin
- **Prestige system** — reset collection để nhận permanent multiplier

### Vì sao phù hợp 100% Static + GitHub Pages

Timer dựa trên `Date.now()` lưu localStorage. Wheel animation dùng CSS transform rotate hoặc Canvas. Toàn bộ collection/inventory là JSON trong localStorage.

### Tối ưu UX Mobile

- ✅ Swipe lên để quay (gesture tự nhiên)
- ✅ Wheel chiếm 70% màn hình, visual lớn rõ ràng
- ✅ Haptic feedback (Vibration API) khi kim nhảy qua segments
- ✅ Animation mượt với CSS `will-change: transform`
- ✅ Portrait layout, one-hand play

### Độ khó triển khai: ⭐⭐ (2/5)

Wheel là vòng tròn CSS/Canvas, quay = rotate animation. Logic trúng thưởng = tính góc. 1 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> CSS transform + transition là đủ cho animation quay. Canvas chỉ cần nếu muốn wheel có nhiều segments phức tạp. Framework không mang lại lợi ích vì UI đơn giản.

### Mở rộng tương lai

- Mini-games khác đổi token (xem ads giả, chơi minigame để earn token)
- Seasonal wheels (Tết, Christmas, Halloween)
- Achievement system
- Social sharing qua URL params

> **Game tương tự thành công:** _Wheel of Fortune_ (mobile), _Lucky Spin_ trên TikTok mini games

---

## 3. Tap Dash Runner

**Thể loại:** Endless Runner / Hyper-casual

### Core Gameplay Loop

Nhân vật tự chạy về phía trước. Người chơi tap để nhảy (1 tap = nhảy thấp, giữ lâu = nhảy cao). Né chướng ngại vật, thu coin. Tốc độ tăng dần. Game over khi va chạm.

### Cơ chế giữ chân

- **High score + distance record** — lưu localStorage
- **Character unlock** — mỗi 500m mở 1 character mới
- **Mission system** — "Thu 50 coins trong 1 run", "Chạy 1000m không nhảy"
- **Daily run** — fixed seed, so sánh với best score
- **Zone themes** — mỗi 500m đổi theme (thành phố → rừng → núi lửa)

### Vì sao phù hợp 100% Static + GitHub Pages

Scrolling nền = CSS translateX hoặc Canvas drawImage offset. Obstacle generation = random từ pool. Không cần physics engine — chỉ cần AABB collision detection.

### Tối ưu UX Mobile

- ✅ Single-tap gameplay (cực kỳ đơn giản)
- ✅ Portrait hoặc landscape đều chơi được
- ✅ Nhân vật ở 1/3 trái màn hình, "road" chiếm phần còn lại
- ✅ Particle effects nhẹ cho impact visual
- ✅ 60fps trên mid-range phones với Canvas 2D

### Độ khó triển khai: ⭐⭐⭐ (3/5)

Cần sprite animation, parallax scrolling, collision detection. 2 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> Canvas 2D cho game rendering. Sprite sheets cho animation. Không cần framework — toàn bộ game là 1 canvas fullscreen + 1 overlay UI.

### Mở rộng tương lai

- Power-ups (magnet, shield, 2x)
- Pet system (pets chạy theo, tự thu coin)
- Seasonal events / limited skins
- Split-path choices (trái = safe, phải = risky nhưng nhiều coin)

> **Game tương tự thành công:** _Subway Surfers_ (3B+ downloads), _Crossy Road_, _Dino Game_ (Chrome offline)

---

## 4. Bubble Pop

**Thể loại:** Puzzle / Casual

### Core Gameplay Loop

Bắn bóng lên trên. Khi 3+ bóng cùng màu dính nhau, chúng nổ. Bóng treo không dính vào gì cũng rơi. Mục tiêu: xóa hết bóng trước khi chạm đáy. Bóng mới rơi xuống từ trên sau mỗi vài lượt.

### Cơ chế giữ chân

- **Level progression** — 200+ levels tăng độ khó (tạo procedurally từ seed)
- **Star rating** — mỗi level cho 1-3 sao dựa trên số lượt bắn
- **Power-ups** — bomb (nổ vùng), rainbow (đổi màu), laser (xóa hàng)
- **Daily puzzle** — fixed layout mỗi ngày
- **Coin system** — earn coins → buy power-ups → dùng ở levels khó

### Vì sao phù hợp 100% Static + GitHub Pages

Grid-based logic, không cần physics phức tạp. Levels generate từ seed = không cần database. Canvas 2D cho rendering bóng + animation nổ.

### Tối ưu UX Mobile

- ✅ Aim bằng drag (kéo ngón tay để chỉnh hướng, thả để bắn)
- ✅ Dotted line hiện trajectory khi aim
- ✅ Portrait layout, bóng launcher ở dưới
- ✅ Haptic feedback khi pop
- ✅ Particle explosion effects

### Độ khó triển khai: ⭐⭐⭐ (3/5)

Cần hex-grid snapping, collision detection với circles, connected-component algorithm cho chain pop. 2 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> Canvas 2D cho rendering. Hex-grid math không quá phức tạp. Game state đơn giản, không cần state management từ framework.

### Mở rộng tương lai

- Boss battles (pop pattern cụ thể để hạ boss)
- Theme packs (animals, fruits, flags)
- Challenge mode (chỉ 1 màu bóng, phải dùng bounce)
- Level editor (save/load JSON trong localStorage)

> **Game tương tự thành công:** _Bubble Witch Saga_ (100M+), _Bubble Shooter_ classic

---

## 5. Math Sprint

**Thể loại:** Educational / Reflex / Speed

### Core Gameplay Loop

Phép tính xuất hiện trên màn hình (VD: "7 × 8 = ?"). Hiện 4 đáp án, chọn đúng nhanh nhất. Mỗi câu đúng + điểm + thêm thời gian. Sai = trừ thời gian. Bắt đầu với 30 giây, trả lời đúng +2s, sai −3s. Mục tiêu: nhiều câu đúng nhất trước khi hết giờ.

### Cơ chế giữ chân

- **High score** — tổng điểm & streak dài nhất
- **Difficulty tiers** — Easy (+-), Medium (×÷), Hard (², √, %), Expert (mixed)
- **Daily challenge** — 20 câu fixed theo ngày, tính tổng thời gian
- **Level system** — XP bar, mỗi level mở difficulty mới
- **Statistics** — biểu đồ accuracy, tốc độ trung bình theo ngày (lưu localStorage)

### Vì sao phù hợp 100% Static + GitHub Pages

Phép tính generate bằng JS random. Không cần API. Timer chạy client-side. Stats lưu localStorage dạng JSON array.

### Tối ưu UX Mobile

- ✅ 4 nút đáp án to, dễ bấm (chiếm 40% dưới màn hình)
- ✅ Phép tính hiện to, rõ ràng ở giữa
- ✅ Timer bar animation mượt ở trên
- ✅ Màu xanh/đỏ flash ngay khi đúng/sai
- ✅ Chơi 1 tay hoàn toàn

### Độ khó triển khai: ⭐⭐ (2/5)

Logic cực đơn giản: random operands, random op, random wrong answers. 1 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> DOM manipulation đủ nhanh cho game này. Không cần Canvas. CSS animation cho timer bar và feedback. Framework là overkill.

### Mở rộng tương lai

- Multiplayer local (2 bên cùng 1 điện thoại, ai bấm nhanh hơn)
- Thêm chế độ: True/False, Fill-in, Estimation
- Math topics: fractions, percentages, currency conversion
- Classroom mode (teacher tạo quiz, share via URL hash)

> **Game tương tự thành công:** _Math Master_ (50M+), _Quick Math+_ trên App Store

---

## 6. Tile Match Triple

**Thể loại:** Puzzle / Match-3 Variant

### Core Gameplay Loop

Một board chứa nhiều tile icon xếp chồng lên nhau. Tap tile để đưa vào thanh slot (tối đa 7 slot). Khi 3 tile cùng loại nằm cạnh nhau trong slot → biến mất. Slot đầy = game over. Mục tiêu: xóa hết tile trên board.

### Cơ chế giữ chân

- **Level progression** — 500+ levels (generated từ template + difficulty curve)
- **Star rating** — 1-3 sao theo thời gian hoàn thành
- **Boosters** — shuffle, undo, remove-3 (earn từ gameplay)
- **Streak bonus** — chơi nhiều ngày liên tiếp = bonus boosters
- **Themed packs** — animals, food, flags, emojis (new icon sets)

### Vì sao phù hợp 100% Static + GitHub Pages

Board layout = JSON data, generate procedurally. Game state = array of tiles + slot. Lưu progress (level, stars, boosters) trong localStorage.

### Tối ưu UX Mobile

- ✅ Tap-only gameplay (không cần drag)
- ✅ Board chiếm 2/3 trên, slot bar ở dưới
- ✅ Zoom gesture để xem tile bị che
- ✅ Tile size tối thiểu 44px (Apple HIG guideline)
- ✅ Smooth slide animation khi tile vào slot

### Độ khó triển khai: ⭐⭐⭐ (3/5)

Cần z-index/depth management, tap detection trên stacked elements, match-3 logic trong slot. 2 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> DOM elements cho tiles (dễ animate, dễ tap detect). CSS transitions cho smooth movement. Framework không cần vì state đơn giản.

### Mở rộng tương lai

- Timed mode
- Puzzle designer (tạo levels share via URL)
- Combo system (clear 2 bộ liên tiếp = bonus)
- Event levels (seasonal themes)

> **Game tương tự thành công:** _Tile Master 3D_ (100M+), _Triple Tile Match_, _3 Tiles_ — top charts 2023-2024

---

## 7. Knife Hit

**Thể loại:** Hyper-casual / Timing

### Core Gameplay Loop

Một khúc gỗ tròn xoay ở giữa màn hình. Người chơi tap để phóng dao vào. Dao không được chạm dao đã cắm. Mỗi stage = số lượng dao cần cắm tăng dần. Có apple trên gỗ — ném trúng apple = bonus.

### Cơ chế giữ chân

- **Stage progression** — vô hạn stages, mỗi 5 stage = boss (gỗ xoay nhanh hơn, đổi hướng)
- **Knife collection** — 50+ knife skins unlock bằng apple coins
- **High score** — stage cao nhất
- **One-more-try loop** — mỗi round rất ngắn (10-30s), thất bại = muốn thử lại ngay
- **Daily knife** — unlock 1 limited skin mỗi ngày chơi

### Vì sao phù hợp 100% Static + GitHub Pages

Canvas 2D rotate animation. Collision = góc giữa dao mới và dao đã cắm. Zero-dependency, mọi thứ tính toán client-side.

### Tối ưu UX Mobile

- ✅ Single-tap = throw knife
- ✅ Vertical layout: gỗ ở trên, dao hàng đợi ở dưới
- ✅ Haptic khi knife hits wood
- ✅ Satisfying "thunk" sound effect (Web Audio API generated)
- ✅ Slow-motion effect ở boss stage

### Độ khó triển khai: ⭐⭐ (2/5)

Canvas circle rotation + angle math. Rất đơn giản. 1 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> Canvas 2D hoàn hảo. Game chỉ có circle + lines + rotation. Không cần bất kỳ framework nào.

### Mở rộng tương lai

- Axe, shuriken, darts (different weapons = different physics)
- Moving targets (horizontal logs)
- Multiplayer local (lần lượt phóng, ai miss trước thua)
- Challenge mode (pattern throw — phóng theo hình ngôi sao)

> **Game tương tự thành công:** _Knife Hit_ by Ketchapp (200M+), _Flippy Knife_

---

## 8. Flappy Jump

**Thể loại:** Hyper-casual / Arcade

### Core Gameplay Loop

Nhân vật bay lên bằng cách tap. Mỗi tap = nhảy lên 1 đoạn, rồi rơi tự do theo trọng lực. Bay qua khoảng trống giữa các cột/chướng ngại. Score = số cột bay qua. Twist: các cột có gap ở vị trí khác nhau, một số di chuyển, và có coins/stars giữa gap.

### Cơ chế giữ chân

- **High score** — addictive "one more try" loop
- **Character unlock** — 30+ characters (birds, planes, rockets, animals)
- **Medal system** — Bronze (10), Silver (25), Gold (50), Platinum (100)
- **Night mode** — sau 50 points, background chuyển tối + chướng ngại khó thấy hơn
- **Speed increase** — mỗi 20 points nhanh hơn 5%

### Vì sao phù hợp 100% Static + GitHub Pages

Canvas 2D cơ bản nhất — rect/circle/image. Gravity = velocity += 0.5 mỗi frame. Collision = AABB. Không gì phức tạp hơn.

### Tối ưu UX Mobile

- ✅ Tap anywhere = flap (toàn bộ màn hình là nút)
- ✅ Portrait orientation
- ✅ Large gap cho mobile (ngón tay ít chính xác hơn)
- ✅ 60fps dễ dàng trên mọi thiết bị
- ✅ Instant restart (tap lại ngay sau game over)

### Độ khó triển khai: ⭐⭐ (2/5)

Một trong những game đơn giản nhất có thể. 3-5 ngày dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> Là bài tutorial kinh điển cho game dev. Canvas + requestAnimationFrame là tất cả cần có.

### Mở rộng tương lai

- Multiplayer split-screen (2 player cùng tap)
- Pipe themes (forest, underwater, space, city)
- Power-ups (slow time, shrink character, ghost mode)
- Ghost replay (shadow của lần chơi trước)

> **Game tương tự thành công:** _Flappy Bird_ (viral 2014, hàng trăm clone vẫn top charts)

---

## 9. Hex Puzzle

**Thể loại:** Puzzle / Spatial

### Core Gameplay Loop

Board hình lục giác (hexagonal grid). Được cho 3 pieces (hình dạng khác nhau từ hex cells). Kéo thả piece vào board. Khi một hàng/đường hex đầy → clear và được điểm. Game over khi không thể đặt piece nào. Score = tổng cells cleared.

### Cơ chế giữ chân

- **High score** — luôn hiện trên màn hình
- **Combo system** — clear 2+ lines cùng lúc = bonus x2, x3
- **Theme unlock** — đạt mốc điểm mở themes mới
- **Undo** — mỗi game có 3 undo miễn phí
- **Weekly challenge** — fixed seed theo tuần, leaderboard local

### Vì sao phù hợp 100% Static + GitHub Pages

Hex grid = pure math (axial/cube coordinates). Piece fitting = array comparison. Toàn bộ logic chạy client-side. Lưu game state localStorage để resume.

### Tối ưu UX Mobile

- ✅ Drag-and-drop pieces (touch events)
- ✅ Preview placement (ghost piece khi drag gần board)
- ✅ Hex cells đủ lớn cho ngón tay (min 40px)
- ✅ Pieces panel ở dưới, board ở trên
- ✅ Pinch-to-zoom nếu board lớn

### Độ khó triển khai: ⭐⭐⭐ (3/5)

Hex grid math phức tạp hơn square grid. Drag-and-drop trên mobile cần polish. 2 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> SVG hoặc Canvas cho hex grid rendering. CSS clip-path cho hex shapes. Framework không cần — game state là 1 array 2D.

### Mở rộng tương lai

- Bigger boards (7-ring, 9-ring hex)
- Timed mode
- Bomb pieces (clear adjacent cells)
- Color-match variant (clear same-color clusters)

> **Game tương tự thành công:** _Hex Puzzle_ (Block Hexa), _Hexagon_ — top puzzle charts

---

## 10. Swipe Solitaire

**Thể loại:** Card / Classic Casual

### Core Gameplay Loop

Solitaire (Klondike) tối giản, thiết kế lại cho mobile. Swipe cards giữa các cột. Double-tap để tự động gửi lên foundation. Auto-hint highlight cards có thể move. Mục tiêu: xếp hết bài lên 4 foundation stacks (A→K theo suit).

### Cơ chế giữ chân

- **Win streak** — bao nhiêu games thắng liên tiếp
- **Statistics** — win rate, best time, total games
- **Daily deal** — fixed shuffle mỗi ngày
- **Undo unlimited** + move counter (challenge: thắng với ít moves nhất)
- **Theme collection** — card backs, board backgrounds, card faces

### Vì sao phù hợp 100% Static + GitHub Pages

52 cards = 1 array shuffle bằng Fisher-Yates. Game rules = standard logic. Daily deal = seed từ `YYYY-MM-DD`. Toàn bộ logic, animation, rendering thuần JS.

### Tối ưu UX Mobile

- ✅ Swipe để move cards (không cần drag chính xác)
- ✅ Double-tap auto-move
- ✅ Auto-complete khi chỉ còn moves hiển nhiên
- ✅ Portrait layout, cards stacked vertically
- ✅ Font size lớn cho số/suit
- ✅ One-hand play possible

### Độ khó triển khai: ⭐⭐⭐⭐ (4/5)

Solitaire rules phức tạp hơn tưởng. Drag-and-drop stacks, auto-complete logic, undo history. 2-3 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> DOM elements cho cards (dễ style, dễ animate với CSS transitions). Drag = touch events. Không cần Canvas hay framework.

### Mở rộng tương lai

- Spider Solitaire, FreeCell, Pyramid (thêm game modes)
- Hint system thông minh
- Card animation polish (flip, fly, cascade)
- Accessibility (high contrast, large cards)

> **Game tương tự thành công:** _Microsoft Solitaire Collection_ (500M+), _Solitaire_ by MobilityWare (top 10 card games mọi thời đại)

---

## 11. Planet Idle

**Thể loại:** Idle / Incremental

### Core Gameplay Loop

Bắt đầu với 1 hành tinh nhỏ. Tap để thu thập năng lượng sao (star energy). Dùng energy để upgrade: kích thước hành tinh, tốc độ quay, thêm mặt trăng, tạo hành tinh mới. Mỗi hành tinh tự động generate energy/giây. Prestige: "Big Bang" reset mọi thứ nhưng tăng permanent multiplier.

### Cơ chế giữ chân

- **Offline progress** — tính energy earned khi offline (dựa trên `Date.now() - lastSave`)
- **Prestige system** — "Big Bang" mỗi khi đạt milestone
- **Discovery log** — unlock hành tinh/sao/thiên hà mới
- **Achievement badges** — 100+ achievements
- **Milestone bonuses** — mỗi power of 10 cho permanent upgrade

### Vì sao phù hợp 100% Static + GitHub Pages

Idle games hoàn hảo cho static — toàn bộ logic là math (nhân, cộng, exponential). Offline progress = delta time × production rate. State lưu localStorage dạng JSON (numbers + timestamps).

### Tối ưu UX Mobile

- ✅ Tap planet to collect (thỏa mãn, particle effects bay ra)
- ✅ Upgrade buttons lớn ở dưới, solar system visualization ở trên
- ✅ Số lớn format đẹp (1.5M, 3.2B, 1.7T)
- ✅ Notification-style "Welcome back! You earned 1.2M while away"
- ✅ CSS animations cho orbiting planets

### Độ khó triển khai: ⭐⭐⭐ (3/5)

Big number math (cần dùng logarithm hoặc string-based big integers). Balancing economy khó. 2-3 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> UI đơn giản (buttons + numbers + animations). Không cần Canvas — CSS transform rotate cho orbit animation. Big number library tự viết hoặc dùng break_infinity.js (~3KB).

### Mở rộng tương lai

- Thêm layer: stars → galaxies → universe → multiverse
- Artifact system (rare drops tăng vĩnh viễn)
- Automation (buy auto-collectors)
- Event system (meteor shower = 10x energy trong 5 phút)

> **Game tương tự thành công:** _Cell to Singularity_ (50M+), _Universal Paperclips_, _Cookie Clicker_ (đã có nhưng Planet Idle là thematic khác biệt)

---

## 12. Color Fill

**Thể loại:** Puzzle / Strategy

### Core Gameplay Loop

Board NxN ô màu (VD: 6x6). Bắt đầu từ góc trên trái. Chọn 1 trong 6 màu → tất cả ô đang thuộc "vùng" của bạn đổi sang màu đó → lan rộng ra ô cùng màu liền kề. Mục tiêu: fill toàn bộ board trong giới hạn lượt (VD: 20 moves cho 8x8).

### Cơ chế giữ chân

- **Level progression** — board size tăng: 6x6 → 8x8 → 10x10 → 14x14
- **Star rating** — 3 sao nếu clear dưới optimal moves
- **Daily puzzle** — fixed board mỗi ngày
- **Color blind mode** — patterns thay vì chỉ màu
- **Move counter** → thách thức beat optimal solution

### Vì sao phù hợp 100% Static + GitHub Pages

Board = 2D array integers (0-5). Flood fill = BFS/DFS. Level generation = random seed. Rất nhẹ, rất nhanh.

### Tối ưu UX Mobile

- ✅ 6 nút màu lớn ở dưới (1 row, dễ bấm 1 tay)
- ✅ Board ở trên, chiếm 60% màn hình
- ✅ Smooth color transition animation
- ✅ Undo button
- ✅ Portrait layout hoàn hảo

### Độ khó triển khai: ⭐⭐ (2/5)

Flood fill algorithm là CS 101. Grid rendering đơn giản. 1 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> CSS Grid cho board rendering. Transition cho color animation. Không cần gì phức tạp hơn.

### Mở rộng tương lai

- AI solver (show optimal solution sau khi clear)
- Time attack mode
- Custom board sizes
- Hex grid variant

> **Game tương tự thành công:** _Flood-It!_, _Color Fill_ trên Google Play (10M+)

---

## 13. Gravity Switch

**Thể loại:** Platformer / Reflex

### Core Gameplay Loop

Nhân vật tự chạy sang phải (auto-runner). Tap để lật ngược trọng lực (nhân vật "rơi" lên trần). Né chướng ngại ở sàn và trần bằng cách switch gravity đúng lúc. Thu coins và power-ups. Score = distance run.

### Cơ chế giữ chân

- **High score** — distance + coins collected
- **Skin system** — 20+ character skins
- **Zone progression** — mỗi 500m = new visual theme + new obstacle types
- **Achievements** — "Switch 100 lần", "Chạy 2000m", "Thu 500 coins"
- **Ghost race** — replay shadow của best run

### Vì sao phù hợp 100% Static + GitHub Pages

Canvas 2D auto-scroller. Gravity = `velocityY *= -1` khi tap. Obstacles = rectangles generated từ patterns. Zero backend needed.

### Tối ưu UX Mobile

- ✅ Single-tap gameplay
- ✅ Full-screen tap zone
- ✅ Portrait or landscape
- ✅ Visual trail effect khi switch gravity
- ✅ Particle effects khi thu coin

### Độ khó triển khai: ⭐⭐⭐ (3/5)

Auto-scrolling game loop, obstacle generation, smooth gravity flip animation. 2 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> Canvas 2D. Game loop = requestAnimationFrame. Toàn bộ rendering là rectangles + sprites. Framework hoàn toàn không cần.

### Mở rộng tương lai

- Double gravity (3 surfaces: floor, ceiling, midway platform)
- Slow-motion power-up
- Boss encounters (dodge pattern attacks)
- Level creator (share via URL encoded patterns)

> **Game tương tự thành công:** _Gravity Switch_ (Ketchapp), _Gravity Guy_ (50M+)

---

## 14. Pattern Lock

**Thể loại:** Puzzle / Memory

### Core Gameplay Loop

Hiện pattern trên grid 3x3 → 5x5 (các ô sáng lên theo thứ tự). Người chơi phải lặp lại pattern đúng thứ tự bằng cách swipe/tap. Mỗi round pattern dài hơn 1 bước. Sai = game over. Tương tự Simon Says nhưng dạng grid pattern.

### Cơ chế giữ chân

- **High score** — pattern dài nhất nhớ được
- **Mode variety** — Classic (thêm 1), Speed (pattern nhanh hơn), Reverse (lặp ngược)
- **Daily challenge** — fixed pattern sequence mỗi ngày
- **Grid size unlock** — 3x3 → 4x4 → 5x5 khi đạt mốc
- **Statistics** — average pattern length, best streak

### Vì sao phù hợp 100% Static + GitHub Pages

Pattern = array of indices, generated random. Animation = CSS highlight. Cực kỳ nhẹ, zero dependency.

### Tối ưu UX Mobile

- ✅ Grid cells lớn, dễ tap/swipe
- ✅ Visual + audio feedback mỗi cell
- ✅ Vibration khi sai
- ✅ Portrait layout, grid ở giữa màn hình
- ✅ One-hand play

### Độ khó triển khai: ⭐⭐ (2/5)

Grid + sequence logic. CSS animations. Rất đơn giản. 1 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> CSS Grid cho layout. Transition/animation cho highlight effect. Đây là game DOM-based hoàn hảo.

### Mở rộng tương lai

- Color patterns (mỗi ô sáng màu khác)
- Sound patterns (âm thanh khác nhau, chơi bằng tai)
- Competitive mode (2 player lần lượt)
- Custom grid shapes (hexagon, circle)

> **Game tương tự thành công:** _Simon Says_ (classic), _Pattern Lock_ games on Play Store (10M+)

---

## 15. Emoji Match

**Thể loại:** Reflex / Casual / Speed

### Core Gameplay Loop

2 emoji lớn hiện trên màn hình. Nếu giống nhau → tap ✅. Nếu khác → tap ❌. Tốc độ tăng dần. Timer đang đếm ngược. Đúng = +1 điểm + thời gian. Sai = -2 giây. Twist: một số rounds đổi luật (tap ✅ khi khác, ❌ khi giống).

### Cơ chế giữ chân

- **High score** — best streak, tổng điểm
- **Speed tiers** — Normal → Fast → Insane → Impossible
- **Brain age score** — tính "tuổi não" dựa trên reaction time
- **Rule changes** — mỗi 20 rounds đổi luật, buộc phải adapt
- **Daily test** — 50 câu fixed, lưu lịch sử performance

### Vì sao phù hợp 100% Static + GitHub Pages

Emoji là Unicode = không cần tải image. Logic = compare 2 strings. Timer = setInterval. Không gì nhẹ nhàng hơn.

### Tối ưu UX Mobile

- ✅ 2 nút cực to ở dưới (✅ và ❌)
- ✅ Emoji cực to ở giữa (font-size: 5rem+)
- ✅ Flash xanh/đỏ full screen khi đúng/sai
- ✅ One-hand play (ngón cái chọn ✅ hoặc ❌)
- ✅ Portrait only

### Độ khó triển khai: ⭐⭐ (2/5)

Đơn giản nhất trong list. Random emoji + compare. 3-5 ngày dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> Chỉ cần DOM elements cho emoji và buttons. CSS cho animations. Zero overhead.

### Mở rộng tương lai

- Category modes (animals only, food only, flags)
- 3-emoji comparison
- Color + emoji combined (emoji giống nhưng màu nền khác → trick)
- Multiplayer local (2 player race)

> **Game tương tự thành công:** _Brain Out_, _Left vs Right_, _Braindom_ — reflex/brain games top charts

---

## 16. Dot Connect

**Thể loại:** Puzzle / Relaxing

### Core Gameplay Loop

Board NxN có dots màu. Nối dots cùng màu bằng đường path. Paths không được chéo nhau. Mọi ô trên board phải được path đi qua. Mỗi level = 1 puzzle có lời giải duy nhất.

### Cơ chế giữ chân

- **Level packs** — Easy (5x5), Medium (7x7), Hard (9x9), Expert (10x10+)
- **Star rating** — clear nhanh = 3 sao
- **Hints** — earn hints bằng chơi (mỗi 5 levels = 1 hint)
- **Completion percentage** — "85% Level Pack completed"
- **Relaxing vibes** — ambient music + satisfying pop sounds

### Vì sao phù hợp 100% Static + GitHub Pages

Puzzle data = JSON (dot positions). Solver verify = BFS pathfinding. Levels có thể pre-generate 1000+ và embed trong JS. < 100KB total.

### Tối ưu UX Mobile

- ✅ Drag finger to draw path
- ✅ Path snaps to grid
- ✅ Undo last path (tap dot nguồn)
- ✅ Board scales to screen size
- ✅ Soothing color palette

### Độ khó triển khai: ⭐⭐ (2/5)

Grid + pathfinding. Touch drag on grid. Hardest part = creating good puzzles (use solver offline). 1-2 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> CSS Grid hoặc Canvas cho board. Touch events cho drawing. Puzzle data embed trong JS file.

### Mở rộng tương lai

- Hex grid variant
- Daily puzzle (seed-based generation)
- Bridge/tunnel mechanic (paths can cross at special tiles)
- Custom puzzle creator

> **Game tương tự thành công:** _Flow Free_ (100M+), _Dot Connect Line Puzzle_

---

## 17. Ice Slide Puzzle

**Thể loại:** Puzzle / Physics-like

### Core Gameplay Loop

Grid-based puzzle. Nhân vật đứng trên băng. Swipe 1 hướng → nhân vật trượt đến khi đụng tường/obstacle. Mục tiêu: trượt đến ô đích. Có blocks cố định, blocks di chuyển được, và portals. Mỗi level = 1 câu đố logic.

### Cơ chế giữ chân

- **200+ levels** — tăng dần complexity (portals, switches, moving blocks)
- **Stars** — tối thiểu moves = 3 sao
- **Move counter** — speedrunners optimize số moves
- **Daily puzzle** — new puzzle mỗi ngày (generated từ seed)
- **Undo/Restart** — khuyến khích thử nhiều cách

### Vì sao phù hợp 100% Static + GitHub Pages

Grid logic thuần túy — mỗi swipe = while loop (move until blocked). Level data = 2D array. Toàn bộ < 50KB.

### Tối ưu UX Mobile

- ✅ Swipe 4 hướng = điều khiển
- ✅ Grid clear, high-contrast
- ✅ Smooth sliding animation
- ✅ Portrait layout
- ✅ Undo button dễ reach

### Độ khó triển khai: ⭐⭐⭐ (3/5)

Grid movement logic đơn giản, nhưng level design cần effort. Portal/switch mechanics thêm complexity. 2 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> CSS Grid cho board. CSS transitions cho slide animation. Level data = JS objects.

### Mở rộng tương lai

- Level editor + share (JSON in URL)
- New mechanics (teleporters, one-way arrows, cracked ice)
- Speedrun timer
- 3-star challenge mode

> **Game tương tự thành công:** _Frozen Slide Puzzle_, _Ice Puzzle_ on App Store, _Sokoban on Ice_

---

## 18. Tap Color Switch

**Thể loại:** Hyper-casual / Timing

### Core Gameplay Loop

Một quả bóng rơi xuống liên tục qua các rào cản màu (mỗi rào 4 phần, 4 màu). Bóng có 1 màu — chỉ đi qua phần rào cùng màu. Tap để bóng nảy lên. Thu vòng tròn đổi màu trên đường đi. Score = số rào vượt qua.

### Cơ chế giữ chân

- **High score** — cực addictive "one more try"
- **Shape variety** — rào hình tròn, vuông, tam giác, cross (mỗi 10 level đổi shape)
- **Skin system** — ball skins, background themes
- **Speed increase** — tốc độ tăng dần tạo tension
- **Achievement medals**

### Vì sao phù hợp 100% Static + GitHub Pages

Canvas 2D circles + rotation. Collision = angle check + color match. Cực nhẹ, zero dependency.

### Tối ưu UX Mobile

- ✅ Single-tap = bounce
- ✅ Full-screen tap zone
- ✅ Vertical scrolling gameplay
- ✅ Vibrant colors, high contrast
- ✅ Instant restart

### Độ khó triển khai: ⭐⭐ (2/5)

Rotating color arcs + collision. Canvas arc rendering. 1 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> Canvas 2D cho rotating arcs. `ctx.arc()` + rotation. Cực kỳ lightweight.

### Mở rộng tương lai

- 3 colors, 5 colors, 6 colors (difficulty modes)
- Moving obstacles
- Gravity switch sections
- Daily challenge with fixed obstacle pattern

> **Game tương tự thành công:** _Color Switch_ (150M+ downloads, viral 2015-2016)

---

## 19. Grow Garden

**Thể loại:** Idle / Simulation / Relaxing

### Core Gameplay Loop

Trồng cây trong vườn ảo. Tap để tưới nước → cây lớn dần → ra hoa/quả → thu hoạch = coins. Dùng coins mua thêm chậu, hạt giống mới, phân bón (tăng tốc). Mỗi cây mất 1-24 giờ real-time để trưởng thành (dựa trên timestamp difference).

### Cơ chế giữ chân

- **Real-time growth** — quay lại sau vài giờ để thu hoạch (delta time)
- **Collection** — 50+ loại cây, hoa, quả cần unlock
- **Garden decoration** — mua fence, fountain, bench bằng coins
- **Seasonal events** — hạt giống đặc biệt theo mùa (dựa vào tháng hiện tại)
- **Achievement** — "Trồng 100 cây", "Thu hoạch 1000 quả"

### Vì sao phù hợp 100% Static + GitHub Pages

Growth = `(Date.now() - plantedTime) / growthDuration`. Toàn bộ garden state = JSON trong localStorage. CSS/SVG cho plant visuals (grow animation = scale transform).

### Tối ưu UX Mobile

- ✅ Tap to water = satisfying (animation giọt nước)
- ✅ Scroll garden horizontally
- ✅ Plants animate growing (CSS scale + opacity transitions)
- ✅ Calm color palette, ambient sounds
- ✅ One-hand play

### Độ khó triển khai: ⭐⭐⭐ (3/5)

Nhiều assets (plant stages), timer management, shop UI. 2-3 tuần dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần hoặc Vue (nếu muốn component reuse)**

> Nếu garden phức tạp (nhiều UI states, shop, inventory), Vue/Vite có thể giúp organize code tốt hơn. Nhưng vanilla JS vẫn hoàn toàn khả thi nếu codebase nhỏ. Build static với Vite = 1 lần build, deploy HTML/JS.

### Mở rộng tương lai

- Animal companions (pets eat fruit, give special items)
- Garden expansion (mua thêm đất)
- Weather system (mưa = không cần tưới, nắng = cây lớn nhanh hơn)
- Trading post (đổi quả hiếm lấy items đặc biệt — offline NPC)

> **Game tương tự thành công:** _Viridi_ (mindful plant sim), _Zen Garden_ trên iOS, _Pocket Plants_

---

## 20. Reaction Time Lab

**Thể loại:** Reflex / Benchmark / Competitive

### Core Gameplay Loop

Màn hình đỏ → chờ → chuyển xanh → TAP! Đo reaction time (ms). Nhiều chế độ: Visual (màu đổi), Audio (tiếng bíp), Sequence (tap theo thứ tự 1-5), Aim (tap vào target xuất hiện random). Sau mỗi test = kết quả + ranking + so sánh với lịch sử.

### Cơ chế giữ chân

- **Personal records** — best time cho mỗi mode, chart theo ngày
- **Ranking tiers** — Turtle → Human → Cat → Fighter Pilot → Robot
- **Daily test** — test mỗi ngày, lưu history 30 ngày
- **Statistics** — median, average, best, worst, trend chart
- **Share results** — copy text results hoặc screenshot
- **Improvement tracking** — "You improved 15ms from yesterday!"

### Vì sao phù hợp 100% Static + GitHub Pages

`performance.now()` cho accurate timing. UI = DOM changes. History = localStorage JSON array. Chart = Canvas 2D hoặc SVG.

### Tối ưu UX Mobile

- ✅ Full-screen color change (không thể miss)
- ✅ Large result display
- ✅ History chart scrollable
- ✅ Tap anywhere
- ✅ Vibration feedback

### Độ khó triển khai: ⭐ (1/5)

Đơn giản nhất trong list. setTimeout + tap handler + performance.now(). 3 ngày dev.

### Stack khuyến nghị: **HTML/CSS/JS thuần**

> Cực kỳ đơn giản. Chart có thể dùng Canvas 2D tự vẽ hoặc Chart.js (~60KB). Không cần framework.

### Mở rộng tương lai

- Thêm tests: Chimp Test (nhớ số theo thứ tự), Verbal Memory, Number Memory, Visual Memory
- Full "Human Benchmark" suite offline
- Export data CSV
- Compare với friends (share via URL params)

> **Game tương tự thành công:** _Human Benchmark_ (humanbenchmark.com — 10M+ monthly visits), _Reaction Time Test_ apps

---

## 📊 Tổng hợp & Ưu tiên

### Ưu tiên phát triển theo ROI (Effort vs. Engagement)

| Tier                                       | Games                                                                                                     | Lý do                                           |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 🥇 **Làm ngay** (1 tuần, engagement cao)   | Reaction Time Lab, Emoji Match, Math Sprint, Knife Hit, Flappy Jump                                       | Đơn giản, viral potential cao, replay addictive |
| 🥈 **Tuần 2-3** (2 tuần, depth tốt)        | Bounce Ball, Color Fill, Pattern Lock, Spin Wheel, Tap Color Switch                                       | Cân bằng effort/reward, cơ chế giữ chân mạnh    |
| 🥉 **Tuần 4-6** (2-3 tuần, chất lượng cao) | Tap Dash Runner, Bubble Pop, Tile Match Triple, Hex Puzzle, Gravity Switch, Dot Connect, Ice Slide Puzzle | Cần polish nhiều, nhưng replay rất cao          |
| 🏅 **Nâng cao** (3 tuần, deep gameplay)    | Swipe Solitaire, Planet Idle, Grow Garden                                                                 | Phức tạp nhưng giữ chân lâu dài nhất            |

### Tech Stack Summary

| Stack                         | Phù hợp cho                         | Số lượng                          |
| ----------------------------- | ----------------------------------- | --------------------------------- |
| **HTML/CSS/JS thuần**         | 19/20 games                         | Mặc định, tối ưu performance      |
| **Vue + Vite (build static)** | 1 game (Grow Garden nếu muốn scale) | Khi UI phức tạp, nhiều components |

> **Kết luận:** Với đặc thù game casual, **HTML/CSS/JS thuần** là lựa chọn tối ưu cho gần như tất cả games. Framework chỉ cần khi game có UI phức tạp nhiều state (shop, inventory, settings). Tất cả 20 games đều có thể deploy 100% trên GitHub Pages mà không cần backend.
