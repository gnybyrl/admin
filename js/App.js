document.addEventListener('DOMContentLoaded', () => {
    // sidebar
    document.querySelectorAll('#sidebar ul > li > .menu-item').forEach((item) => {
        item.addEventListener('click', () => {
            // Remove classes from all menu items
            document.querySelectorAll('#sidebar ul > li > .menu-item').forEach((otherItem) => {
                otherItem.classList.remove('bg-[#d9f3ea]', 'text-green-800');
                otherItem.classList.add('text-slate-800');
            });

            // Add classes to the clicked item
            item.classList.add('bg-[#d9f3ea]', 'text-green-800');
            item.classList.remove('text-slate-800');
        });
    });



    let sidebarToggleBtn = document.getElementById('toggle-sidebar');
    let sidebarCollapseMenu = document.getElementById('sidebar-collapse-menu');

    sidebarToggleBtn.addEventListener('click', () => {
        if (!sidebarCollapseMenu.classList.contains('open')) {
            sidebarCollapseMenu.classList.add('open');
            sidebarCollapseMenu.style.cssText = 'width: 270px; visibility: visible; opacity: 1;';
            sidebarToggleBtn.style.cssText = 'left: 236px;';
        } else {
            sidebarCollapseMenu.classList.remove('open');
            sidebarCollapseMenu.style.cssText = 'width: 32px; visibility: hidden; opacity: 0;';
            sidebarToggleBtn.style.cssText = 'left: 10px;';
        }

    });
});


let modalproject = document.getElementById('modalproject')

function newProject() {
    modalproject.style.display === 'none' ? modalproject.style.display = 'flex' : modalproject.style.display = 'none'
}