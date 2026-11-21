document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.btn-bars'); 
    const sidebar = document.getElementById('sidebar');

    // 1. Khôi phục trạng thái thu gọn cho Desktop
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (isCollapsed) {
        document.body.classList.add('sidebar-collapsed');
    }

    // 2. Xử lý click nút 3 gạch
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                // Mobile: Mở/đóng sidebar
                sidebar.classList.toggle('show');
            } else {
                // Desktop: Thu gọn/mở rộng sidebar
                document.body.classList.toggle('sidebar-collapsed');
                const currentState = document.body.classList.contains('sidebar-collapsed');
                localStorage.setItem('sidebarCollapsed', currentState);
            }
        });
    }
});
