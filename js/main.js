document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".btn-bars");
    const sidebar = document.getElementById("sidebar");

    // 1. Khôi phục trạng thái thu gọn cho Desktop
    const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
    if (isCollapsed) {
        document.body.classList.add("sidebar-collapsed");
    }

    // 2. Xử lý click nút 3 gạch
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                sidebar.classList.toggle("show");
            } else {
                document.body.classList.toggle("sidebar-collapsed");
                const currentState = document.body.classList.contains("sidebar-collapsed");
                localStorage.setItem("sidebarCollapsed", currentState);
            }
        });
    }

    // 3. Xử lý tìm kiếm
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (searchForm && searchInput) {
        // Nếu có tham số ?search= trên URL thì điền lại vào ô tìm kiếm
        const urlParams = new URLSearchParams(window.location.search);
        const initialSearch = urlParams.get("search");
        if (initialSearch) {
            searchInput.value = initialSearch;
        }

        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const keyword = searchInput.value.trim();

            if (!keyword) {
                if (typeof Swal !== "undefined") {
                    Swal.fire({
                        icon: "warning",
                        title: "Chưa nhập từ khóa",
                        text: "Vui lòng nhập tên phòng, khách thuê hoặc hợp đồng.",
                        timer: 1800,
                        showConfirmButton: false
                    });
                } else {
                    alert("Vui lòng nhập tên phòng, khách thuê hoặc hợp đồng.");
                }
                searchInput.focus();
                return;
            }

            window.location.href = `room.html?search=${encodeURIComponent(keyword)}`;
        });
    }
});