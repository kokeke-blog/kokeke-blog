document.addEventListener("DOMContentLoaded", () => {

    const data = {
      tokyo: ["聖地A", "聖地B"],
      osaka: ["聖地C"],
      hokkaido: ["聖地D"]
    };
  
    const prefNames = {
      tokyo: "東京都",
      osaka: "大阪府",
      hokkaido: "北海道"
    };
  
    const prefs = document.querySelectorAll(".prefecture");
  
    // 最大値（0対策）
    const max = Math.max(1, ...Object.values(data).map(arr => arr.length));
  
    prefs.forEach(pref => {
  
      const classes = pref.classList;
  
      const name = [...classes].find(c =>
        !["prefecture","kanto","kinki","tohoku","chubu","kyushu","shikoku"].includes(c)
      );
  
      const count = (data[name] || []).length;
  
      if (count > 0) {
        pref.style.fill = "#2ca9e1"; 
      } else {
        pref.style.fill = "#fffbea";
      }
  
      // ===== 数字表示（ズレ修正版）=====
      if (count > 0) {
  
        const bbox = pref.getBBox();
        const matrix = pref.getCTM();
  
        const centerX = bbox.x + bbox.width / 2;
        const centerY = bbox.y + bbox.height / 2;
  
        const point = pref.ownerSVGElement.createSVGPoint();
        point.x = centerX;
        point.y = centerY;
  
        const transformed = point.matrixTransform(matrix);
  
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  
        text.setAttribute("x", transformed.x);
        text.setAttribute("y", transformed.y);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("alignment-baseline", "middle");
        text.setAttribute("class", "count-label");
  
        text.textContent = count;
  
        pref.parentNode.appendChild(text);
      }
  
      // ===== ホバー =====
      pref.addEventListener("mouseenter", () => {
        pref.style.opacity = 0.7;
      });
  
      pref.addEventListener("mouseleave", () => {
        pref.style.opacity = 1;
      });
  
      // ===== クリック =====
      pref.style.cursor = "pointer";
  
      pref.addEventListener("click", () => {
  
        const list = data[name] || [];
  
        document.getElementById("pref-name").textContent =
          prefNames[name] || name;
  
        document.getElementById("list").innerHTML =
          list.length > 0
            ? list.map(x => `<li>${x}</li>`).join("")
            : "<li>登録なし</li>";
      });
  
    });
  
  });