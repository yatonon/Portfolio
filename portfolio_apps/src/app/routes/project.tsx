import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//ビルド時にバンドラに読み込ませるため明示的に記載
const workProjects = import.meta.glob('./index_components/projects/work*.tsx');
const selfworkProjects = import.meta.glob('./index_components/projects/selfwork*.tsx');

export const WorkRoute = () => {
    const { work_id, selfwork_id } = useParams<{ work_id?: string; selfwork_id?: string }>();
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        const loadProject = async () => {
            try {
                if (work_id && workProjects[`./index_components/projects/work${work_id}.tsx`]) {
                    const projectModule = await workProjects[`./index_components/projects/work${work_id}.tsx`]();
                    setProject((projectModule as any).project);
                } else if (selfwork_id && selfworkProjects[`./index_components/projects/selfwork${selfwork_id}.tsx`]) {
                    const projectModule = await selfworkProjects[`./index_components/projects/selfwork${selfwork_id}.tsx`]();
                    setProject((projectModule as any).project);
                }
            } catch (error) {
                console.error('Failed to load project:', error);
            }
        };

        loadProject();
    }, [work_id, selfwork_id]);

    // 画像のタグを含む文字列を画像として表示する
    const renderIngenuity = (ingenuity: string) => {
        return ingenuity.split('<br>').map((line: string, index: number) => (
            <span key={index}>
                {line.includes('<img') ? (
                    line.split(/(?=<img)/).map((imgLine, imgIndex) => {
                        const isImgTag = imgLine.includes('<img');
                        return isImgTag ? (
                            <img
                                key={imgIndex}
                                src={imgLine.match(/src="([^"]+)"/)?.[1]}
                                alt={imgLine.match(/alt="([^"]*)"/)?.[1] || ''}
                                className={imgLine.match(/className="([^"]*)"/)?.[1] || ''}
                            />
                        ) : (
                            <span key={imgIndex}>
                                {imgLine}
                                <br />
                            </span>
                        );
                    })
                ) : (
                    <>
                        {line}
                        <br />
                    </>
                )}
            </span>
        ));
    };

    if (!project) {
        return <div></div>;
    }

    return (
        <div className="w-full p-6 pt-20 pb-20 bg-white">
            <div className="md:p-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">{project.title}</h1>
                <img src={project.imageUrl} alt="Project image" className="w-full  rounded" />
                <h2 className="text-2xl font-bold m-4">概要</h2>
                <p className="mb-8">{project.overview}</p>
                <h2 className="text-2xl font-bold mb-4">主な使用言語等</h2>
                <div className="mb-8">
                    {project.technologies.map((tech: string) => (
                        <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-4">担当</h2>
                <div className="mb-8 space-y-4">
                    {project.sections.map((section: { title: string; items: string[] }, index: number) => (
                        <div key={index} className="bg-gray-100 p-4 rounded shadow-inner">
                            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                            <ul className="list-disc list-inside pl-4">
                                {section.items.map((item: string, itemIndex: number) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-4">工夫点</h2>
                {renderIngenuity(project.ingenuity)}
            </div>
            <button
                onClick={() => window.history.back()}
                className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
                戻る
            </button>
        </div>
    );
};
