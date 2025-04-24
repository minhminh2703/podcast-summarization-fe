import React from 'react';
import { Box, Typography, Button, Paper, IconButton } from '@mui/material';
import { Add, ContentCopy, Download } from '@mui/icons-material';

const FullSummary: React.FC = () => {
    const handleCopy = () => {
        // Logic to copy the summary text to clipboard
        const summaryText = document.getElementById('summary-text')?.innerText || '';
        navigator.clipboard.writeText(summaryText).then(() => {
            alert('Summary copied to clipboard!');
        });
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Buttons Section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#000000', // Black background
                        color: '#FFFFFF', // White text
                        borderRadius: '20px', // Rounded corners
                        padding: '8px 20px', // Padding for the button
                        '&:hover': { backgroundColor: '#333333' }, // Darker background on hover
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                    }}
                    endIcon={<Add />} // Add the "+" icon
                >
                    New podcast
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#000000', // Black background
                        color: '#FFFFFF', // White text
                        borderRadius: '20px', // Rounded corners
                        padding: '8px 20px', // Padding for the button
                        '&:hover': { backgroundColor: '#333333' }, // Darker background on hover
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                    }}
                    endIcon={<Download />} // Add the "+" icon
                >
                    Download
                </Button>
            </Box>

            {/* Summary Section */}
            <Paper sx={{ 
                padding: 3, 
                backgroundColor: 'transparent', 
                color: 'white', 
                borderRadius: '10px',
                border: '2px solid rgb(90, 49, 9)', // Brown border color 
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                        Summary
                    </Typography>
                    <IconButton
                        sx={{ color: '#E0E0E0' }}
                        onClick={handleCopy}
                        title="Copy summary to clipboard"
                    >
                        <ContentCopy />
                    </IconButton>
                </Box>

                <Typography variant="body1" sx={{ marginBottom: 1, fontSize: '14px' }}>
                    Một số đứa trẻ từng được ca ngợi là thần đồng hoặc xuất chúng từ nhỏ, nhưng cuộc sống khi trưởng thành của họ không phải lúc nào cũng rực rỡ như kỳ vọng. Dưới đây là một số điểm chính về chủ đề này:
                </Typography>
                
                <Box sx={{ marginBottom: 2 }} id="summary-text">
                    <ul>
                        <li>
                            <Typography variant="body2" sx={{ fontSize: '12px', marginBottom: 1 }}>
                                <strong>Khái niệm thần đồng:</strong> Thần đồng là những đứa trẻ bộc lộ tài năng vượt trội trong một lĩnh vực nào đó, như âm nhạc, toán học, hội họa hay khoa học, khi còn rất nhỏ.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" sx={{ fontSize: '12px', marginBottom: 1 }}>
                                <strong>Áp lực xã hội và kỳ vọng:</strong> Những đứa trẻ xuất chúng thường chịu áp lực lớn từ gia đình, xã hội và bản thân để duy trì hoặc phát triển tài năng.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" sx={{ fontSize: '12px', marginBottom: 1 }}>
                                <strong>Thành công khi trưởng thành:</strong> Một số thần đồng tiếp tục gặt hái thành công khi trưởng thành, như Mozart trong âm nhạc hay Blaise Pascal trong toán học.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" sx={{ fontSize: '12px', marginBottom: 1 }}>
                                <strong>Khó khăn và thất bại:</strong> Một số người gặp khó khăn trong việc duy trì thành tích vượt trội khi trưởng thành, do áp lực tâm lý, thiếu định hướng hoặc mất hứng thú.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" sx={{ fontSize: '12px', marginBottom: 1 }}>
                                <strong>Yếu tố môi trường và hỗ trợ:</strong> Môi trường nuôi dưỡng và sự hỗ trợ từ gia đình, bạn bè, và cộng đồng đóng vai trò quan trọng trong việc giúp các thần đồng phát triển ổn định và toàn diện.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2" sx={{ fontSize: '12px', marginBottom: 1 }}>
                                <strong>Bài học từ những thần đồng:</strong> Thành công không chỉ được đo lường bằng tài năng bẩm sinh mà còn bởi nỗ lực, sự kiên trì và kỹ năng ứng phó với cuộc sống.
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </Paper>
        </Box>
    );
};

export default FullSummary;
