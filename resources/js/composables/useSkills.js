import { ref } from 'vue';

export function useSkills() {
    const selectedCategory = ref('web');

    const categories = ref([
        { id: 'web', name: 'Desarrollo Web', icon: 'code' },
        { id: 'mobile', name: 'Desarrollo Móvil', icon: 'mobile' },
        { id: 'systems', name: 'Sistemas y Redes', icon: 'server' },
        { id: 'programming', name: 'Lenguajes y Scripting', icon: 'terminal' },
        { id: 'devops', name: 'DevOps y Cloud', icon: 'cloud' }
    ]);

    const webTechs = ref({
        frontend: [
             // Core Technologies
             { name: 'HTML5', icon: 'html' },
             { name: 'CSS3', icon: 'css' },
             { name: 'JavaScript', icon: 'javascript' },
             { name: 'TypeScript', icon: 'typescript' },
             
             // CSS Frameworks & Tools
             { name: 'TailwindCSS', icon: 'tailwind' },
             { name: 'SASS/SCSS', icon: 'sass' },
             { name: 'Bootstrap', icon: 'bootstrap' },
             { name: 'Bulma CSS', icon: 'bulmacss' },
             
             // JavaScript Frameworks
             { name: 'Vue.js', icon: 'vue' },
             { name: 'React', icon: 'react' },
             { name: 'Alpine.js', icon: 'alpine' },
             
    
             // Build Tools
             { name: 'Vite', icon: 'vite' },
             { name: 'Webpack', icon: 'webpack' },
             
             // Utilities
             { name: 'Axios', icon: 'axios' },
             { name: 'jQuery', icon: 'jquery' },
             { name: 'AJAX', icon: 'ajax' },
             
             // Testing
             { name: 'Vitest', icon: 'vitest' },
        ],
        backend: [
            { name: 'PHP', icon: 'php' },
            { name: 'Node.js', icon: 'node' },
            { name: 'Python', icon: 'python' },
            { name: 'Laravel', icon: 'laravel' },
            { name: 'Laravel Sanctum', icon: 'laravel' },
            { name: 'Laravel Reverb', icon: 'laravel' },
            { name: 'Livewire', icon: 'livewire' },
            { name: 'WebSockets', icon: 'websockets' },
            // Databases
            { name: 'MySQL', icon: 'mysql' },
            { name: 'MariaDB', icon: 'mariadb' },
            { name: 'Redis', icon: 'redis' },
            
            // Testing
            { name: 'PHPUnit', icon: 'phpunit' },
            { name: 'Pest PHP', icon: 'pest' },
            // API
            { name: 'REST API', icon: 'api' },
            { name: 'OAuth2', icon: 'oauth2' },
        ],
        devops: [
            { name: 'Docker', icon: 'docker' },
            { name: 'Git', icon: 'git' },
            { name: 'CI/CD', icon: 'cicd' },
            { name: 'AWS', icon: 'aws' },
            { name: 'Nginx', icon: 'nginx' },
            { name: 'Apache', icon: 'apache' },
        ]
    });

    const mobileTechs = ref([
        { name: 'Android Studio', icon: 'android-studio' },
        { name: 'React Native', icon: 'react' },
    ]);

    const systemsTechs = ref([
        { name: 'Windows Server', icon: 'windows-server' },
        { name: 'DNS Server', icon: 'dns' },
        { name: 'Nginx', icon: 'nginx' },
        { name: 'Apache', icon: 'apache' },
        { name: 'DHCP Server', icon: 'dhcp' },
        { name: 'Mail Server', icon: 'mail-server' },
        { name: 'Linux', icon: 'linux' }
    ]);

    const programmingTechs = ref([
        { name: 'Java', icon: 'java' },
        { name: 'Go', icon: 'go' },
        { name: 'Python', icon: 'python' },
        { name: 'Bash', icon: 'bash' },
        { name: 'PowerShell', icon: 'powershell' },
        { name: 'Node.js', icon: 'node' },
    ]);

    const devOpsTechs = ref([
        { name: 'Docker', icon: 'docker' },
        { name: 'Git', icon: 'git' },
        { name: 'AWS', icon: 'aws' },
        { name: 'Linux', icon: 'linux' },
    ]);

    const showAll = ref({
        web: false,
        web_frontend: false,
        web_backend: false,
        web_devops: false,
        mobile: false,
        systems: false,
        programming: false,
        devops: false
    });

    const getDisplayedTechs = (category, subcategory = null) => {
        const techMap = {
            web: webTechs.value,
            mobile: mobileTechs.value,
            systems: systemsTechs.value,
            programming: programmingTechs.value,
            devops: devOpsTechs.value
        };
        
        const techs = subcategory ? techMap[category][subcategory] : techMap[category];
        const showAllKey = subcategory ? `${category}_${subcategory}` : category;
        
        if (!Array.isArray(techs)) {
            return [];
        }
        
        return showAll.value[showAllKey] ? techs : techs.slice(0, 6);
    };

    const hasMoreTechs = (category, subcategory = null) => {
        const techMap = {
            web: webTechs.value,
            mobile: mobileTechs.value,
            systems: systemsTechs.value,
            programming: programmingTechs.value,
            devops: devOpsTechs.value
        };
        
        const techs = subcategory ? techMap[category][subcategory] : techMap[category];
        return Array.isArray(techs) && techs.length > 6;
    };

    const setSelectedCategory = (category) => {
        selectedCategory.value = category;
    };

    return {
        selectedCategory,
        categories,
        showAll,
        getDisplayedTechs,
        hasMoreTechs,
        setSelectedCategory
    };
}