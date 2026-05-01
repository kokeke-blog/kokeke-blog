function draw() {
    const result = document.getElementById("result");
    const player = document.getElementById("radio-player");

    result.textContent = "🎰 抽選中...";
    result.classList.add("spin");

    setTimeout(() => {
        const num = Math.floor(Math.random() * 64) + 1; // ここを変える

        result.classList.remove("spin");
        result.textContent = "第" + num + "回！";

        // 🔥 エピソード埋め込みURL対応
        const episodes = {
            1: "https://radiko.jp/embed_podcast/episodes/ab19154f-1fc2-48b1-9119-5718a1c85267?type=default",
            2: "https://radiko.jp/embed_podcast/episodes/1f54732a-07fb-4d24-a894-d9981574f744?type=default",
            3: "https://radiko.jp/embed_podcast/episodes/c3bf3e90-217b-43b4-b2c9-9b8f08d92174?type=default",
            4: "https://radiko.jp/embed_podcast/episodes/8f0b7923-27b4-4ca0-ac9c-4385be370620?type=default",
            5: "https://radiko.jp/embed_podcast/episodes/c701fb2e-3928-4585-9c6b-80f36dbaa2fb?type=default",
            6: "https://radiko.jp/embed_podcast/episodes/7350a897-5602-4ee5-bc02-7201a2d76009?type=default",
            7: "https://radiko.jp/embed_podcast/episodes/bf0f40fc-bb26-4783-bcac-9e246807f41e?type=default",
            8: "https://radiko.jp/embed_podcast/episodes/eb95c003-26bf-4752-94aa-685c3533496d?type=default",
            9: "https://radiko.jp/embed_podcast/episodes/f365a755-1ffd-4c4d-9f3d-4f7557c1977f?type=default",
            
            10: "https://radiko.jp/embed_podcast/episodes/78a1a3d0-dc69-451d-b6a6-bba4733c99f7?type=default",
            11: "https://radiko.jp/embed_podcast/episodes/9e17385b-8791-44d8-9fb6-5f74a884f298?type=default",
            12: "https://radiko.jp/embed_podcast/episodes/727ff8a6-9427-40d6-a55c-b24f5fb89270?type=default",
            13: "https://radiko.jp/embed_podcast/episodes/8e2c5ca5-f8b8-43fe-9158-c7c3aaebd494?type=default",
            14: "https://radiko.jp/embed_podcast/episodes/a73d7941-1060-4e57-911c-663142762724?type=default",
            15: "https://radiko.jp/embed_podcast/episodes/79bcce8f-0bcd-4ab5-b658-74c4a745d567?type=default",
            16: "https://radiko.jp/embed_podcast/episodes/18137d2c-4f19-45c8-9ebb-1accac92a9a7?type=default",
            17: "https://radiko.jp/embed_podcast/episodes/edd5d590-8c1e-40a0-bb35-5874f088dff4?type=default",
            18: "https://radiko.jp/embed_podcast/episodes/ee75a6bb-ebdd-4998-990d-fe477e8cbbe2?type=default",
            19: "https://radiko.jp/embed_podcast/episodes/40ebca71-32af-472d-a21a-c20866975189?type=default",
            
            20: "https://radiko.jp/embed_podcast/episodes/a417f242-747c-4810-9b75-b14bdb92fd51?type=default",
            21: "https://radiko.jp/embed_podcast/episodes/ba3580c4-fb71-4ca8-a738-f09ba316ebe7?type=default",
            22: "https://radiko.jp/embed_podcast/episodes/05f8620e-ecd4-425c-8146-824a9c3b17c3?type=default",
            23: "https://radiko.jp/embed_podcast/episodes/782648a8-17c1-4824-82f3-0b0de5e77b06?type=default",
            24: "https://radiko.jp/embed_podcast/episodes/b41cdc3f-adef-4ed4-8752-5fcfa0cfb0da?type=default",
            25: "https://radiko.jp/embed_podcast/episodes/a8bdf3fe-3222-4530-9cea-aac53ae351d6?type=default",
            26: "https://radiko.jp/embed_podcast/episodes/d69e5cdb-6dee-4456-afe1-daca6650aafd?type=default",
            27: "https://radiko.jp/embed_podcast/episodes/c3fdd967-3e0a-4968-8346-bb666905e8aa?type=default",
            28: "https://radiko.jp/embed_podcast/episodes/c220b1a9-8ec5-4d60-b07d-38d6e242110a?type=default",
            29: "https://radiko.jp/embed_podcast/episodes/9679ed3b-4142-430b-8774-e4940cace436?type=default",
            
            30: "https://radiko.jp/embed_podcast/episodes/e66534a4-7fc1-455c-afb9-f5fc3c406f5e?type=default",
            31: "https://radiko.jp/embed_podcast/episodes/194fe2b4-6e71-4dda-8852-3f3c8d0bb054?type=default",
            32: "https://radiko.jp/embed_podcast/episodes/56287aac-1179-4aac-9f14-3a3a87f2e267?type=default",
            33: "https://radiko.jp/embed_podcast/episodes/7a4f396b-23b1-4462-b28d-d4e91341eec7?type=default",
            34: "https://radiko.jp/embed_podcast/episodes/6522bcd3-188f-4330-9b08-0a647e864f5d?type=default",
            35: "https://radiko.jp/embed_podcast/episodes/46eee068-9715-422e-ba1b-c76a14b559c3?type=default",
            36: "https://radiko.jp/embed_podcast/episodes/566055bd-a9eb-4158-ac71-4622982c44f5?type=default",
            37: "https://radiko.jp/embed_podcast/episodes/6bfb61a2-4386-4987-8108-9bf1773c07da?type=default",
            38: "https://radiko.jp/embed_podcast/episodes/2f126a8b-912e-44cc-9c2d-f3382fd6e134?type=default",
            39: "https://radiko.jp/embed_podcast/episodes/72815764-cefd-43e5-8fdf-3916745fae8b?type=default",
            
            40: "https://radiko.jp/embed_podcast/episodes/797bcf64-1443-4e38-9128-34962039f320?type=default",
            41: "https://radiko.jp/embed_podcast/episodes/1113a427-8868-493d-ba4d-34b7730613ce?type=default",
            42: "https://radiko.jp/embed_podcast/episodes/2dc3bc48-e8aa-40cc-b74a-80624cda6732?type=default",
            43: "https://radiko.jp/embed_podcast/episodes/a78ead85-3345-4073-9e9d-bff8c80731be?type=default",
            44: "https://radiko.jp/embed_podcast/episodes/83bdc940-5349-4922-8208-42238cbeb387?type=default",
            45: "https://radiko.jp/embed_podcast/episodes/1f6ea62b-b288-4b24-9590-a00bc1fba166?type=default",
            46: "https://radiko.jp/embed_podcast/episodes/1011c799-b471-4964-86a0-1a2093946b47?type=default",
            47: "https://radiko.jp/embed_podcast/episodes/4721e74b-c175-4177-a50c-f3bb1d9512d9?type=default",
            48: "https://radiko.jp/embed_podcast/episodes/34100729-1ed7-4921-8447-54eeacd73f71?type=default",
            49: "https://radiko.jp/embed_podcast/episodes/eba0977d-92c3-4d27-946b-29fb5c1fe1a7?type=default",
            
            50: "https://radiko.jp/embed_podcast/episodes/10ea09b2-79b5-48a9-b5ce-6bbca67b0b9e?type=default",
            51: "https://radiko.jp/embed_podcast/episodes/6470c1aa-fc67-486b-8e29-feb90f66d4a7?type=default",
            52: "https://radiko.jp/embed_podcast/episodes/3a85c49a-766a-478e-8194-6e1e6ae521bf?type=default",
            53: "https://radiko.jp/embed_podcast/episodes/8828fc03-8411-4f61-9cb4-70aa2f7403e9?type=default",
            54: "https://radiko.jp/embed_podcast/episodes/964dd364-7f4f-4f11-b988-00fc90194c79?type=default",
            55: "https://radiko.jp/embed_podcast/episodes/8dafd8e3-f810-46e4-bda6-4c6e940f43f8?type=default",
            56: "https://radiko.jp/embed_podcast/episodes/c4d7316f-6a28-4250-ac0b-47d71d73f984?type=default",
            57: "https://radiko.jp/embed_podcast/episodes/d563daa0-a2fb-4c32-88bc-9ce6d8797318?type=default",
            58: "https://radiko.jp/embed_podcast/episodes/2f4bd183-baa9-4dda-a7c9-b79626a2802d?type=default",
            59: "https://radiko.jp/embed_podcast/episodes/5b53051b-3491-4722-ad0b-9ed292c8d6ed?type=default",
            
            60: "https://radiko.jp/embed_podcast/episodes/0b48afe5-c5c1-4349-a12a-1dd41d53c86a?type=default",
            61: "https://radiko.jp/embed_podcast/episodes/1c04344a-f5f7-4ba0-92b5-210ef1da97f7?type=default",
            62: "https://radiko.jp/embed_podcast/episodes/1a025e43-8298-4442-8c80-c767a186533d?type=default",
            63: "https://radiko.jp/embed_podcast/episodes/c5f324e6-94ba-40cb-9327-6beda15ff9bc?type=default",
            64: "https://radiko.jp/embed_podcast/episodes/92e78e89-196d-4770-838e-50bd2c403bb9?type=default"
            // 必要分だけ追加
        };

        if (episodes[num]) {
            player.innerHTML = `
        <iframe 
          title="radio-player"
          src="${episodes[num]}"
          allow="clipboard-write *; web-share *;"
          style="width: 100%; height: 348px;"
          frameborder="0">
        </iframe>
      `;
        } else {
            player.innerHTML = "<p>この回は再生プレイヤー未対応です</p>";
        }

    }, 1000);
}